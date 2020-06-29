# Create the Hacker News first page with pagination support.

> **Story Point**: 8 | **Time spent**: 10hr | **Status**: Completed

This includes only table and interaction on the list of story table. This should be responsive for Mobile and Tablet.

-   AC1 - Create the component to render the static page, keep in mind Accessibility.
-   AC2 - Fetch data from api and render component dynamically.
-   AC3 - Add upvote and hide feature in browser even page refresh shows the latest.
    -   Challenges:
        -   If we are storing the data in browser storage while rendering from server the data will not be available with us.
        -   If we store the data in the server then application will be a stateful application.
    -   Solution:
        I will store in localstorage and after page load before store assign to redux I will update the state. (This is not ideal can see flickering in the webpage)
-   AC4 - Add next previous section and page navigation.

-   AC5 - Draw the line chat ID in x-axis and vote in y-axis.
-   AC6 - GraphQl setup for accessing the data from actual api (This is for performance and unnecessary data download in client)
