# 🛡️ AI Safety Incident Log Service - HumanChain

- A simple RESTful API service built with the **MERN stack** to log and manage AI safety incidents.

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Runtime**: Node.js with ES Modules (type: module)
- **Environment Variables**: Managed via dotenv

---

## 📦 Features

- Log new AI safety incidents
- Fetch all or specific incidents
- Delete incidents by ID
- Preload sample data for quick testing
- Clean code, RESTful design, and validation

---

## 📁 Folder Structure

-project/├── controllers/ 
-            │ └── incidentController.js 
-        ├── models/ 
-            │ └── incidentModel.js 
-        ├── middlewares/ 
-           │ └── errorMiddleware.js 
-        ├── routes/ 
-            │ └── incidentRoutes.js 
-       ├── config/ 
-            │ └── db.js 
-        ├── seed.js 
-        ├── constants.js 
-        ├── server.js 
-        ├── .env 
-        ├── package.json 
-        └── README.md


---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd project
npm install
```
2. Create a .env File
-    Create a .env file in the root with the following:
-    PORT=5000
-    MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/incident-log?retryWrites=true&w=majority
-    Replace with your actual MongoDB URI.
 
3. Run the Server
-    npm run dev
- Server will run at http://localhost:5000

---


## 🧪 API Endpoints

- Method	       Endpoint	        Description
- GET	           /incidents	    Get all incidents
- POST	            /incidents	    Create a new incident
- GET	           /incidents/:id	Get a single incident by ID
- DELETE	       /incidents/:id	Delete an incident by ID

---

## 📝 Example Incident JSON
    {
        "title": "AI misclassified image",
        "description": "Facial recognition falsely identified a person.",
        "severity": "High"
    }


## 🌱 Seeding Sample Data
To insert 2–3 sample incidents into the DB for testing:
```bash
    node seed.js
```


## 📮 Sample Response - GET /incidents
    [
        {
            "id": 1,
            "title": "Bias in AI recruiting",
            "description": "AI tool showed gender bias in hiring process.",
            "severity": "Medium",
            "reported_at": "2025-04-25T10:20:00Z"
        }
    ]


## ✅ Validation
- All fields are required: title, description, severity
- everity must be one of: "Low", "Medium", "High"
- Returns appropriate HTTP error codes (e.g., 400, 404)


## 👨‍💻 Author
- Sushant Singh
- MERN Stack Developer
- Contact: sushantsingh408sks@gmail.com

## 🧠 Notes
- Followed REST best practices
- Error handling implemented
- Project is clean, modular, and easy to maintain
