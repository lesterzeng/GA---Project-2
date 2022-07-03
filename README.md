# GA---Project-2

App - Bring Music Back To Life

Objective - To create a music app that shows and plays the users' Spotify playlist, while displaying a random dancing gif.

Approach taken - One of the challenging aspect of tackling the project is the use of the Spotify API.

The reason why I chose to use Spotify API is because of how it is well-documented. If there were any issues, I could refer to the documents for help, whereas other music APIs didn't have as much.

The first thing I had to tackle was understanding the the flow of the authorization code, that took over the weekend plus some, in order to grant me access to the API's data.

Once data could be accessed, the next step is to determine the which data was relevant; playlist information and the play button. The authorization code flow was tricky, because it requires an additional step, for acquiring certain permission(scopes) from the user to access. The most efficient method for me was to get every permission available from the user, and refactor the codes after.

I depended on the idea of consolidating as much codes into a single component, before breaking it up to separate ones after - didn't work out as well as expected. Additional complications came about when I was tring to implement the play button component, it required the same token from the previous component. How I solve this was to store the token in the local storage, and access it from the new component.

Overall, the majority of the time spent in this project was understanding and working out the authorization flow. While the rest of the code required much thinking, it was straightforward.

Conclusion - Though more challenging than I thought, it was actually quite fun to be able to access the api of Spotify. I have yet to implement the gif element, but that will be another time.
