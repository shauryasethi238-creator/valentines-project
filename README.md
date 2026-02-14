# 💕 Valentine's Day Proposal Web App for Pavni

A romantic, interactive web application built with Flask to ask Pavni to be your Valentine for Valentine's Day 2026! Features beautiful animations, a playful "No" button that moves away, confetti celebrations, and a countdown timer.

## ✨ Features

- 🎨 **Beautiful Design**: Pink and red color scheme with gradient backgrounds
- 💖 **Animated Hearts**: Floating heart particles throughout the application
- ⏰ **Countdown Timer**: Real-time countdown to Valentine's Day 2026
- 🎵 **Background Music**: Toggle-able romantic background music
- 🎯 **Interactive Buttons**: 
  - "Yes" button that stays in place
  - "No" button that playfully moves away when hovered over
- 🎉 **Celebration Page**: Confetti animation and romantic message when she says yes
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💾 **Response Tracking**: Saves Pavni's response with timestamp

## 🚀 Quick Start

### Prerequisites

- Python 3.11 or higher
- pip (Python package installer)

### Local Installation

1. **Clone or download this repository**

2. **Navigate to the project directory**
   ```bash
   cd Valentine
   ```

3. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   ```

4. **Activate the virtual environment**
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

5. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

6. **Run the application**
   ```bash
   python app.py
   ```

7. **Open your browser** and visit:
   ```
   http://localhost:5000
   ```

## 🎵 Adding Background Music (Optional)

To add background music:

1. Find a romantic royalty-free music file (MP3 format)
2. Rename it to `music.mp3`
3. Place it in the `static/audio/` directory
4. The music toggle button will now work!


## 📸 Adding Your Couple Photo

To display your photo on the celebration page:

1. Choose a beautiful photo of you and Pavni together
2. Rename it to `couple-photo.jpg` (or update the filename in `templates/celebration.html`)
3. Place it in the `static/images/` directory
4. Recommended: 1200x900 pixels or higher, under 2MB file size

**Supported formats**: JPG, PNG, WebP

See `static/images/README.md` for detailed instructions.
**Note**: The app works perfectly without music - the toggle button will simply show an alert if no music file is present.

## 📦 Project Structure

```
Valentine/
├── app.py                      # Flask application with routes
├── requirements.txt            # Python dependencies
├── Procfile                    # Heroku deployment config
├── runtime.txt                 # Python version specification
├── .gitignore                  # Git ignore file
├── README.md                   # This file
├── responses.txt               # Stores Pavni's response (created automatically)
├── static/
│   ├── css/
│   │   └── style.css          # All styling and animations
│   ├── js/
│   │   ├── main.js            # Core interactivity and button logic
│   │   ├── countdown.js       # Valentine's Day countdown timer
│   │   └── confetti.js        # Confetti animation for celebration
│   ├── audio/
│   │   └── music.mp3          # Background music (optional)
│   └── images/
│       └── couple-photo.jpg   # Your couple photo (add your own!)
└── templates/
    ├── landing.html           # Animated entrance page
    ├── proposal.html          # Main proposal with Yes/No buttons
    └── celebration.html       # Success page with confetti
```

## 🌐 Deployment Options

### Option 1: Heroku (Recommended)

1. **Install Heroku CLI**
   - Download from: https://devcenter.heroku.com/articles/heroku-cli

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create a new Heroku app**
   ```bash
   heroku create your-valentine-app-name
   ```

4. **Initialize Git repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Valentine's Day app for Pavni"
   ```

5. **Deploy to Heroku**
   ```bash
   git push heroku main
   ```
   (If your branch is named `master`, use `git push heroku master`)

6. **Open your app**
   ```bash
   heroku open
   ```

Your app will be live at: `https://your-valentine-app-name.herokuapp.com`

### Option 2: PythonAnywhere

1. **Sign up** at https://www.pythonanywhere.com (free tier available)

2. **Upload your files**
   - Use the Files tab to upload all project files
   - Or clone from GitHub if you've pushed there

3. **Create a new web app**
   - Go to Web tab
   - Click "Add a new web app"
   - Choose "Flask" and Python 3.11
   - Set the source code directory to your project folder

4. **Configure the WSGI file**
   - Edit the WSGI configuration file
   - Update the path to your `app.py`
   - Example:
     ```python
     import sys
     path = '/home/yourusername/Valentine'
     if path not in sys.path:
         sys.path.append(path)
     
     from app import app as application
     ```

5. **Install dependencies**
   - Open a Bash console
   - Navigate to your project directory
   - Run: `pip install -r requirements.txt`

6. **Reload your web app**
   - Go back to the Web tab
   - Click the "Reload" button

Your app will be live at: `https://yourusername.pythonanywhere.com`

### Option 3: Render

1. **Sign up** at https://render.com

2. **Create a new Web Service**
   - Connect your GitHub repository (push your code to GitHub first)
   - Or use "Deploy from Git URL"

3. **Configure the service**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`

4. **Deploy**
   - Render will automatically deploy your app

## 💝 Customization

### Changing the Girlfriend's Name

The app is currently personalized for "Pavni". To change it:

1. Open `templates/landing.html` and update line 13:
   ```html
   <h1 class="landing-title">Hey [YourGirlfriendName]...</h1>
   ```

2. Open `templates/proposal.html` and update line 24:
   ```html
   <h1 class="proposal-title">Dear [YourGirlfriendName],</h1>
   ```

3. Open `templates/celebration.html` and update line 22:
   ```html
   <p class="message-line">I'm so happy you said yes, [YourGirlfriendName]! 😊</p>
   ```

### Changing Colors

Edit `static/css/style.css` and modify the color variables in the gradient backgrounds and button styles.

### Modifying Messages

Edit the HTML files in the `templates/` directory to customize the romantic messages.

## 🎯 How It Works

1. **Landing Page**: Animated entrance with a heart icon and "Click to Continue" button
2. **Proposal Page**: 
   - Displays romantic message
   - Shows countdown to Valentine's Day 2026
   - "Yes" button - clicking saves response and goes to celebration
   - "No" button - moves away when you try to hover/click it!
3. **Celebration Page**:
   - Confetti animation
   - Your couple photo displayed beautifully
   - Romantic success message
   - Response is saved to `responses.txt` with timestamp

## 📝 Response Tracking

When Pavni clicks "Yes", her response is automatically saved to `responses.txt` with a timestamp:

```
2026-02-09 16:23:45 - Pavni's response: YES! 💕
```

## 🐛 Troubleshooting

### Port Already in Use
If you get a "port already in use" error:
```bash
# Find and kill the process using port 5000
lsof -ti:5000 | xargs kill -9
```

### Module Not Found
Make sure you've activated your virtual environment and installed dependencies:
```bash
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### Static Files Not Loading
Ensure your directory structure matches the project structure above, especially the `static/` and `templates/` folders.

## 💡 Tips for Success

1. **Add Your Photo**: Place a beautiful couple photo in `static/images/couple-photo.jpg`
2. **Test First**: Run the app locally before deploying to make sure everything works
3. **Share the Link**: Once deployed, share the URL with Pavni via text or social media
4. **Timing**: Send it at a romantic moment for maximum impact!
5. **Mobile-Friendly**: The app works great on phones, so she can view it anywhere
6. **Add Music**: Including background music makes it even more special

## 🎉 After She Says Yes

The celebration page includes:
- Beautiful confetti animation
- Your couple photo displayed in an elegant frame
- Romantic quote from Maya Angelou
- Heartfelt message about Valentine's Day 2026
- Beating heart animation

## 📄 License

This project is free to use for personal romantic purposes! Feel free to customize it for your own special someone.

## ❤️ Made with Love

Created with Flask, HTML5, CSS3, and JavaScript to help you create a memorable Valentine's Day proposal!

---

**Good luck! May Pavni say YES! 💕**# valentines-project
