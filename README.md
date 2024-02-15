<p align="center">
  <a href="https://fontverse.vercel.app/" rel="noopener">
    <img width="200" alt="FontVerseLogo" src="https://github.com/joefelx/FontVerse/assets/73597256/de282652-27f2-44ff-a4fd-fa7ac76a0e45">
  </a>
</p>

<h2 align="center">Font Verse</h2>

<p align="center"> Font Verse is a font-serving web application allowing users to browse, select, and use various fonts for their creative projects</p>

<hr> 
<br>

## 📝 Table of Contents
- [About](#about)
- [Feature](#feature)
- [Architecture](#architecture)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Author](#author)
- [Acknowledgments](#acknowledgement)

<br>

## 🧐 About <a id="about"></a>
Font Verse is a font-serving web application allowing users to browse, select, and use various fonts for their creative projects. The application offers a user-friendly interface where users can search for fonts based on style, category, or popularity. Font Verse also allows previewing the fonts in different text sizes and styles before using them. Users can include their favorite fonts in the application and use them in their projects.

<br>

## 🏁 Features <a id="feature"></a>
1. **Font Search and Browse**: Users can search for fonts by keyword, style, category, or popularity. They can also browse through curated collections of fonts.
2. **Font Preview**: Users can preview fonts in different text sizes and styles before downloading them.
3. **Community Interaction**: Users can leave reviews and comments on fonts, as well as follow their favorite designers, and discover new fonts through recommendations.
4. **API Integration**: Font Verse integrates with import tooling, allowing users to seamlessly import fonts into their projects.

<br>

## 🏗️ Architecture <a id="architecture"></a>
  ### Client-Side
  - The front end is built using React, a popular JavaScript library for building user interfaces. React components handle user interactions.
  - Tailwind is used to design the front end of the application.
  - State management is done using useContext, and useReducer.
  - Implemented a custom hook called `useFont` for API requests and state management.

  <br>

  ### Server-Side
  - The back end is built using Node.js and Express, a minimal and flexible Node.js web application framework.
  - Data is stored in a MongoDB database.
  - The server communicates with the client via a RESTful API.
    
  <br>
  
  ### Endpoints
  #### Get the specified font family.

  ***Request***
  ```
  GET /api/font/style?fontFamily=Mattone
  ```
  <br>
    
  |      Name      | Required |  Type   | Description                                                                                           |
  | --------------:|:--------:|:-------:| ----------------------------------------------------------------------------------------------------- |
  |  `fontFamily`  | required | string  | Specify the font family that will be used to find the metadata of the font in the database.           |

  <br>
  
  ***Response***
  ```css
    @font-face {
      font-family: 'Mattone';
      src: url('https://font-verse-api.onrender.com/fonts/1707023098991-Mattone-150.woff2') format('woff2');
      font-weight: 500;
    }
  ```
  <br>
    
  #### Get multiple font families.

  ***Request***
  ```
  GET /api/font/style?fontFamily=Mattone,Montserrat
  ```
  <br>  
  
  |      Name      | Required |  Type   | Description                                                                                            |
  | --------------:|:--------:|:-------:| -------------------------------------------------------------------------------------------------------|
  |  `fontFamily`  | required | string  | Specify the font families with comma-separated font families that will be used to find the metadata of the fonts in the database. |

  <br>
  
  ***Response***
  ```css
    @font-face {
      font-family: 'Mattone';
      src: url('https://font-verse-api.onrender.com/fonts/1707023098991-Mattone-150.woff2') format('woff2');
      font-weight: 500;
    }
  
    @font-face {
      font-family: 'Montserrat';
      src: url('https://font-verse-api.onrender.com/fonts/1707024729190-Montserrat-Medium.woff2') format('woff2');
      font-weight: 500;
    }
  ```
<br>

## 🚀 Deployment <a id="deployment"></a>
### Client
Deployed on the Vercel.
[fontverse.vercel.app](http://fontverse.vercel.app)

### Server
Deployed on [Render.com](render.com) 
In the free tier, the server automatically paused. It takes 50 or more sec to spin up the server, which will be upgraded in the future.

<br>

## 🎈 Usage <a id="usage"></a>
### Selecting Fonts
  The fonts are available on the [fontverse.vercel.app](http://fontverse.vercel.app) website. Users can select the fonts. After selecting the fonts, it will be added to the list.

### Copy the Link tag
  Link tag will be generated for the selected font family dynamically. Copy and paste it into the HTML file or import into CSS file.

  HTML
  ```html
  <link rel="stylesheet" href="https://font-verse-api.onrender.com/api/font/style?fontFamily=Mattone"/>
  ```
  CSS
  ```css
  @import url("https://font-verse-api.onrender.com/api/font/style?fontFamily=Mattone");
  ```

### Font Family Usage
  The font family names can be specified in CSS file.
  ```css
  font-family: Mattone; 
  ```

<br>

## ⛏️ Built Using <a id="built_using"></a>
- React - Client Framework
- MongoDB - Database
- Express - Server Framework
- NodeJs - Server Environment

<br>

## ✍️ Author <a id="author"></a>
[@joefelx](https://github.com/joefelx) - Designed and Developed.

<br>

## 🎉 Acknowledgements <a id="acknowledgement"></a>
***Inspiration***
  - [Google fonts](https://fonts.google.com/)
  - [Fontspace](https://www.fontspace.com/)
