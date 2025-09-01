const express = require('express');
require('dotenv').config();
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");

const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {cloudinaryConnect} = require('./config/cloudinary');
const fileUpload = require("express-fileupload");

// Import models for sample data
const User = require('./models/User');
const Profile = require('./models/Profile');
const Category = require('./models/Category');
const Course = require('./models/Course');
const Section = require('./models/Section');
const SubSection = require('./models/SubSection');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 4000;

// Function to initialize sample data
const initializeSampleData = async () => {
  try {
    console.log('Initializing sample data...');
    
    // Check if default user exists
    let defaultUser = await User.findOne({ email: 'default@user.com' });
    
    if (!defaultUser) {
      // Create default profile
      const profileDetails = await Profile.create({
        gender: "Male",
        dateOfBirth: "1990-01-01",
        about: "Default user for testing purposes",
        contactNumber: "1234567890",
      });

      // Create default user
      const hashedPassword = await bcrypt.hash("password123", 10);
      defaultUser = await User.create({
        firstName: "Default",
        lastName: "User",
        email: "default@user.com",
        password: hashedPassword,
        accountType: "Student",
        approved: true,
        additionalDetails: profileDetails._id,
        image: 'https://api.dicebear.com/5.x/initials/svg?seed=Default User',
      });
      console.log('Default user created');
    }

    // Create categories if they don't exist
    const categories = [
      { name: "Development", description: "Learn programming and development" },
      { name: "Business", description: "Business and entrepreneurship courses" },
      { name: "Design", description: "UI/UX and graphic design courses" },
      { name: "Marketing", description: "Digital marketing and SEO courses" }
    ];

    for (const cat of categories) {
      const existingCategory = await Category.findOne({ name: cat.name });
      if (!existingCategory) {
        await Category.create(cat);
      }
    }
    console.log('Categories initialized');

    // Create sample courses
    const sampleCourses = [
      {
        courseName: "JavaScript Fundamentals",
        courseDescription: "Learn the basics of JavaScript programming",
        whatYouWillLearn: "Variables, functions, objects, arrays, DOM manipulation",
        price: 999,
        tag: ["JavaScript", "Programming", "Web Development"],
        status: "Published",
        instructions: ["Complete all exercises", "Practice coding daily", "Build projects"],
        instructor: defaultUser._id,
        category: (await Category.findOne({ name: "Development" }))._id,
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
      },
      {
        courseName: "React for Beginners",
        courseDescription: "Master React.js from scratch",
        whatYouWillLearn: "Components, props, state, hooks, routing",
        price: 1499,
        tag: ["React", "JavaScript", "Frontend"],
        status: "Published",
        instructions: ["Follow along with examples", "Complete assignments", "Build a portfolio"],
        instructor: defaultUser._id,
        category: (await Category.findOne({ name: "Development" }))._id,
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      },
      {
        courseName: "Digital Marketing Masterclass",
        courseDescription: "Complete guide to digital marketing",
        whatYouWillLearn: "SEO, social media marketing, email marketing, analytics",
        price: 1999,
        tag: ["Marketing", "Digital Marketing", "SEO"],
        status: "Published",
        instructions: ["Create marketing campaigns", "Analyze data", "Optimize strategies"],
        instructor: defaultUser._id,
        category: (await Category.findOne({ name: "Marketing" }))._id,
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      }
    ];

    for (const courseData of sampleCourses) {
      const existingCourse = await Course.findOne({ courseName: courseData.courseName });
      if (!existingCourse) {
        const course = await Course.create(courseData);
        
        // Create sections and subsections for each course
        const sections = [
          {
            sectionName: "Introduction",
            courseId: course._id,
            subSections: [
              {
                title: "Welcome to the Course",
                description: "Overview of what you'll learn",
                videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                timeDuration: "5:00"
              },
              {
                title: "Course Setup",
                description: "Setting up your development environment",
                videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                timeDuration: "10:00"
              }
            ]
          },
          {
            sectionName: "Core Concepts",
            courseId: course._id,
            subSections: [
              {
                title: "Basic Concepts",
                description: "Understanding the fundamentals",
                videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                timeDuration: "15:00"
              },
              {
                title: "Advanced Topics",
                description: "Diving deeper into advanced concepts",
                videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                timeDuration: "20:00"
              }
            ]
          }
        ];

        for (const sectionData of sections) {
          const section = await Section.create({
            sectionName: sectionData.sectionName,
            courseId: sectionData.courseId
          });

          for (const subSectionData of sectionData.subSections) {
            const subSection = await SubSection.create({
              title: subSectionData.title,
              description: subSectionData.description,
              videoUrl: subSectionData.videoUrl,
              timeDuration: subSectionData.timeDuration
            });

            // Add subsection to section
            section.subSection.push(subSection._id);
            await section.save();
          }

          // Add section to course
          course.courseContent.push(section._id);
        }

        await course.save();
        console.log(`Course "${courseData.courseName}" created with sections`);
      }
    }

    console.log('Sample data initialization completed!');
  } catch (error) {
    console.error('Error initializing sample data:', error);
  }
};

database.dbConnect();
app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

//cloudinary connect
cloudinaryConnect();

// Initialize sample data after database connection
initializeSampleData();

//routes

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.get('/',( req,res )=>{
    return res.json({
        success:true,
        message:'Your server is running'
    })
})

app.listen(PORT,() => {
    console.log(`App is running At: ${PORT}`);
})