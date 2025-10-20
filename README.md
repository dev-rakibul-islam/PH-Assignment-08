# 🐣 Basic Requirements

- Make the Application Responsive for All the Devices
- Give a meaning full name to your application

---

# 🔧 Main Requirements

## 1. 🧱 Layout & Data Design

#### Header (For Reference only Follow ui folder Home-page.png, make it reference)

- The header must include:
  - A logo "on clicking" it user will be navigated to home page.
  - A navigation bar with links [ `home` , `apps` , `installation` ] and active route indication.
  - A `Contribution` button as Figma linking to the your GitHub profile.
    My github profile link: [https://github.com/dev-rakibul-islam]

#### Footer

- Design a custom footer using your own creativity and style. You can follow in UI folder i keep a Home-page.png for reference.

#### Data (I all ready create a data file for you, you can find it in the `Public` folder as `allApps.json`)

- Create an JSON Array of minimum 12-20 objects for app data using the following structure:
  ```js
  {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: number;
    ratingAvg: number;
    downloads: number;
    ratings: [
      { name: "1 star"; count: number },
      { name: "2 star"; count: number },
      { name: "3 star"; count: number },
      { name: "4 star"; count: number },
      { name: "5 star"; count: number }
    ];
  }
  ```

---

## 2. 🏠 Home Page(Reference: Follow design in UI folder Home-page.png)

#### Banner

- Must contain a center-aligned heading, text, and two buttons.
- “App Store” button will redirect to the App Store.
- “Play Store” button will redirect to the Play Store.
- Below the buttons, include an image as in assets folder name `hero.png`.

#### States Section

- Must contain three state cards as shown in Home-page.png.
- Each state should have a title and a unique background color or style(Refer to Home-page.png).

#### Trending Apps Section (Data come from Public folder as allApps.json)

- Display Only eight apps in a four-column layout.(Use the first eight apps from the JSON data)
- Each app card should display:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on a card should navigate the user to the App Details page(Refer to "App-Details.png") also no route name show in Nav Bar.
- Include a “Show All” button that navigates to the All Apps page.

---

## 3.📱 All Apps Page(Reference: Follow design in UI folder All-Apps-page.png Data come from Public folder as allApps.json)

#### Title Section

- Include a title and subtitle following the design in All-Apps-page.png.

#### Search and States

- Display the total number of apps on the left and a search bar on the right.
- `Implement live search functionality`
  - filters apps by title as the user types.
  - Search will be case-insensitive
  - If no app matches, display a “No App Found” message.

#### App Section

- Display all apps from the JSON data.
- Each app card should include:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on an app card should navigate to the App Details page(No Route name show in Nav Bar).

---

## 4.📊 App Details Page

#### App Information

- Show app image on the left.
- Display app details such as title, rating, downloads, reviews.
- Include an `Install button`:
  - When clicked, it becomes disabled and the text changes to `Installed`.
  - Show a Success Toast after App installed(I already add react-toastify library, you just need to use it).

#### App Review Chart

- Implement a responsive chart using the **Recharts** library.
- Visualize the app’s review data as shown in the UI folder App-Details.png.

#### App Description

- Show the app details in description section as per ui folder App-Details.png.

---

## 5. Error Page & Others

- Create a custom error page for invalid routes.

- Show a loading animation during: `Challenge Part`

  - Page navigation.
  - Search operation.

- Show a Relevant Not Found message app not found in app details section.

## Components structure (added)

- `src/components/NavBar.jsx` — top navigation bar with logo, route links (Home, Apps, Installation) and Contribution button linking to your GitHub profile.
- `src/components/Footer.jsx` — site footer with quick links, resources, and GitHub link.

These are imported and rendered in `src/App.jsx` so they appear on every page. Edit `NavBar.jsx` and `Footer.jsx` to customize global navigation and footer content/styles.

- Ensure that reloading any route after deployment does not cause an error.

---

# Challenge Requirement

### LocalStorage Features

#### App Installation

- When the “Install” button is clicked:
  - Save the app to localStorage.
  - If the app is already installed, show a disabled button with the text `Installed`.

#### My Installation Page(Reference: Follow design in UI folder My-Installation-page.png)

- Create a page named “My Installation” following the Figma design.
- Display all installed apps as cards.
- Include an Uninstall button:
  - Clicking it
    - removes the app from both the UI and localStorage.
    - Show an Toast with some relevant message

---

### Sort by Downloads

- Implement a dropdown for sorting apps by download count.
- The dropdown must include:
  - **High-Low:** Sort apps in ascending order by downloads.
  - **Low-High:** Sort apps in descending order by downloads.

---

### Loading Animation

- Show a loading animation during:
  - Page navigation.
  - Search operation
