# 📚 Book Manager - CRUD Application

A modern, full-stack book management application built with React, Node.js, Express, and MongoDB. Manage your personal book collection with a beautiful and intuitive interface.

## ✨ Features

- **📖 Book Management**: Add, edit, delete, and view books
- **🔍 Search Functionality**: Search books by title or author
- **📊 Statistics Dashboard**: View total book count
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **⚡ Real-time Updates**: Instant UI updates after CRUD operations
- **✅ Form Validation**: Client-side validation with error messages
- **🔄 Loading States**: Visual feedback during API operations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with Hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons (optional)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd book-manager
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/bookmanager
PORT=5000

# Start the backend server
npm start
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Install Lucide React for icons (optional)
npm install lucide-react

# Start the development server
npm run dev
```

### 4. Database Setup

#### Option A: Use Sample Data
Import the provided sample dataset:
```bash
# Using MongoDB Compass
1. Open MongoDB Compass
2. Connect to your database
3. Create a collection named 'books'
4. Import the sample data from the project

# Using MongoDB Shell
mongosh
use bookmanager
db.books.insertMany([/* sample data array */])
```

#### Option B: Start Fresh
The application will work with an empty database and you can add books using the UI.

## 📁 Project Structure

```
book-manager/
├── backend/
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── books.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookForm.jsx
│   │   │   ├── BookCard.jsx
│   │   │   └── EmptyState.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── sample-data.json
└── README.md
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |

### Request Body (POST/PUT)
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "year": 2024
}
```

### Response Format
```json
{
  "_id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "year": 2024,
  "id": 1,
  "__v": 0
}
```

## 🎨 UI Components

### App.jsx
- Main application component
- Manages global state
- Handles API calls
- Implements search functionality

### BookForm.jsx
- Modal form for adding/editing books
- Form validation
- Loading states
- Error handling

### BookCard.jsx
- Individual book display component
- Edit and delete actions
- Responsive card design

### EmptyState.jsx
- Displays when no books are found
- Encourages user engagement

## 🔍 Usage

1. **Adding Books**: Click the "Add Book" button and fill in the form
2. **Searching**: Use the search bar to find books by title or author
3. **Editing**: Click the "Edit" button on any book card
4. **Deleting**: Click the "Delete" button (with confirmation dialog)
5. **Viewing Stats**: Check the total book count in the dashboard

## 🌟 Key Features Explained

### Search Functionality
- Real-time search as you type
- Searches both title and author fields
- Case-insensitive matching

### Form Validation
- Required field validation
- Year validation (must be positive number)
- Real-time error feedback
- Form reset after submission

### Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly buttons and interactions

### Loading States
- Spinner during initial data fetch
- Button loading states during form submission
- Disabled form fields during submission

## 🚨 Troubleshooting

### Common Issues

**1. CORS Errors**
```bash
# Make sure CORS is properly configured in backend
npm install cors
```

**2. MongoDB Connection Issues**
```bash
# Check your MongoDB connection string in .env
MONGODB_URI=mongodb://localhost:27017/bookmanager
```

**3. Lucide React Import Error**
```bash
# Install the icons package
npm install lucide-react
```

**4. Port Already in Use**
```bash
# Backend (change port in .env)
PORT=5001

# Frontend (change port in vite.config.js)
server: { port: 3001 }
```

### Development Tips
- Use MongoDB Compass for database visualization
- Check browser console for detailed error messages
- Use Postman to test API endpoints directly
- Enable React Developer Tools for debugging

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/bookmanager
PORT=5000
NODE_ENV=development
```

### Frontend
No environment variables required for basic setup.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool
- [MongoDB](https://www.mongodb.com/) for the flexible database

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information
4. Include error messages and steps to reproduce

---

**Happy Reading! 📚✨**
