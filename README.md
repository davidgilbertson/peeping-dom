# Peeping DOM

*This is an experiment.*

Peeping DOM enables you to record your users' journeys through your site and play them back.

- Playback will replicate the screen size used by your user
- Will highlight the elements being clicked on, and replicate text being entered
- Will replay state changes in a React app
- Select which session to play back (e.g. filter by users that searched and bought a product)
- Play back at real time speed, or step by interactions (type, click, click, type, click, etc)


## The two parts

### Record
The markup that you must add to your code in order to record the interactions
- naming clickable elements.
- recording state changes for state-playback locally

### Playback
- Open a special page for viewing playbacks and select a session (user journey) from a list
- Play that session (in an iFrame that matches the users viewport)
- Plays at normal speed or step forward/backward by interaction
