# photozone-frontend
A social media to share images (Created By React)
## installation
To install the dependencies of the project, open the project directory in the terminal and run the following code:
```
npm install
```
And to serve and run the project in your browser, run the following code:
```
npm start
```
and the browser will automatically open this address: `localhost:3000`
# Components Documentation
Here you'll see the API documentation of the components created in this project.

## TitledPic
Used in many other container components.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| img     | string | The image url |
| title   | string | Title         |
| caption | string | Caption       |
| userId | string | the user's username in the database       |
| imageStyle | style object | for applying css props to the image    |
| titleStyle | style object | for applying css props to the title    |
| captionStyle | style object | for applying css props to the caption    |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | userId: string -> the user's username in the database | Executed when users clicks on it |


## ImageUpload
Just a button
- props

| prop    | value  | description   |
|---------|--------|---------------|
| text    | string, node, array of nodes |  Button text  |
| style    | style object |  a place for applying css props  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | event object | Executed when users clicks on it|

## EmptyThumbnail
EmptyThumbnail image
- props

| prop    | value  | description   |
|---------|--------|---------------|
| src    | string |  src of the image  |
| title    | string |  the text chat will show on hover  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | event object | Executed when users clicks on it|

## PageDetails
Contains some details of a page like followers count, followings count and photos count...
- props

| prop    | value  | description   |
|---------|--------|---------------|
| followers    | number |  # of followers  |
| followings    | number |  # of followings  |
| photos    | number |  # of photos  |

## TabSelection
A component for selecting between several tabs.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| tabs    | array of strings |  a Javascript array of strings that contains the tabs titles |
| activeTab    | string |  Text value of the active tab  |
| onTabChange    | string |  the text chat will show on hover  |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onTabChange | an string: Text value of the destination tab | Executed when user clicks on one of the tabs|



## NewPostSvgIcon
Just a Title bar with an empty body which the programmer can fill it with some elements.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| children    | anything that can be rendered in react | The children of the NewPostSvgIcon goes here. |




## Posts
NewPostPage Card Component

- props

| prop    | value  | description   |
|---------|--------|---------------|
| title | a string | Title of the post |
| photo | a string | url of the post photo |
| publisherName | a string | name of the post publisher |
| publisherProfPic | a string | url of the publisher prodile picture |
| moreOptions | array of objects with shape: {title: a_string, onSelect: a_function (params: postId)}} |  |
| postId | a string | id of the post in the database |
| publisherId | a string | username of the post publisher |

- methods

| method  | arguments                      | description   |
|---------|----------------------------------|---------------|
| onClick | a string: id of the post in database | Executed when user clicks on the post|



items: PropTypes.shape({
        hasNewMessage: PropTypes.bool,
        contactName: PropTypes.string,
        contactUsername: PropTypes.string,
        profPic: PropTypes.string
    })

## Messages
A Container Component for chats (used in `ChatsPage`)
- props

| prop    | value  | description   |
|---------|--------|---------------|
| items | array of object of shape ({ hasNewMessage: PropTypes.bool, contactName: PropTypes.string, contactUsername: PropTypes.string, profPic: PropTypes.string}) | chats to be displayed in the screen |

- methods

| method | arguments | description |
|--------|-----------|-------------|
| onChatOpen | chat Object | Executed when user opens a chat |

## HomeSvgIcon
It's just a home icon used in the NavBar. I put it inside of a component cause:
1. it's a svg icon
2. it has two states (so has two colors): one: active state with color #333 and non active state with color: #777
- props

| prop    | value  | description   |
|---------|--------|---------------|
| active | a boolean | Identifies that if this icon is selected tab |
| color | a string | Regular color |
| activeColor | a string | Active color |

- methods

| prop    | arguments  | description   |
|---------|--------|---------------|
| onClick | event object | Executed when user clicks on it |


## SearchSvgIcon
Same as HomeSvgIcon.

## NewPostSvgIcon
Same as HomeSvgIcon.

## ChatsSvgIcon
Same as HomeSvgIcon.

## ProfileSvgIcon
Same as HomeSvgIcon.



## NavBar
The navigation bar used in many pages
- props

| prop    | value  | description   |
|---------|--------|---------------|
| activeTab | a string | The initially opened tab |

- methods

| prop    | arguments  | description   |
|---------|--------|---------------|
| onChangeTab | a string: tab | Executed when user clicks on a tab |


## PageBody
It's just a container for body content.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| children | anything | Here we can insert anything that can be rendered as a react element |
| uid | string | a unique ID for a page body; it's used to save the scroll position of the page and restore it when user returns to it|

## Page
It's just a container for content of a page (it's a full screen empty page).
- props

| prop    | value  | description   |
|---------|--------|---------------|
| children | anything | Here we can insert anything that can be rendered as a react element |

## ChatPage
The Home Page component displayed in `/` path.

## NewPostPage
The Post page displayed in `/posts/:id` path.


## Tag
It's just a tag displayed under the post's description.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| value | string | the string value of the tag |


## Tags
A container for multiple "Tag" components.
- props

| prop    | value  | description   |
|---------|--------|---------------|
| items | array of strings | An array of tags string values|


## ImageUpload
The Image upload component used in `NewPostPage` for uploading post photo
- props

| prop    | value  | description   |
|---------|--------|---------------|
| text | string | the text displayed inside of the box|
| style | style object | for applying css props |
| inputId | string | a unique id for the file input|
| onImageAdded | array of strings | An array of tags string values|



- methods

| prop    | arguments  | description   |
|---------|--------|---------------|
| onImageAdded | event object | Executed when user selects an image from gallery or etc. |
