Nodejs api Controller generator. It basically auto generates the controller directory and files prefilled with functions for the developer.


### `Guide to using locally in your project` 
### `In your project directory, run npm install controller-generator OR yarn add controller-generator`

Add the following to scripts in your package.json<br/>
### `"controller-generate": "controller-generate"`

Run the following command:<br>
### `npm run controller-generate name1 name2 name3 `
Where the 'names' refer to names you want to give to your controller(s).<br />





### `Guide to using globally` 
### `run npm install -g controller-generator OR yarn global add controller-generator`
Run the following command:<br/>
### `controller-generate name1 name2 name3`




### Example for generating two or more controllers
<ol>
<li>npm run controller-generate hospital management pharmacy</li>
<li>controller-generate hospital management pharmacy</li>
</ol>


### Example for generating only one controller
<ol>
<li>npm run controller-generate hospital</li>
<li>controller-generate hospital</li>
</ol>


