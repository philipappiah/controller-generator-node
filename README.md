Nodejs api Controller generator. It basically auto generates the controller directory and files prefilled with functions for the developer.



### `Guide to using locally in your project` 
### `In your project directory, run npm install controller-generator OR yarn add controller-generator`

Follow these steps.<br />
<ol>
</li>Add "controller-generate": "controller-generate" to scripts in your package.json</li>
<li> npm run controller-generate <b>name1</b> <b>name2</b> <b>name3</b>   </li>
</ol>

Where the 'names' refer to names you want to give to your controller(s).<br />



### `Guide to using globally` 
### `run npm install -g controller-generator OR yarn global add controller-generator`
###  Run the following command:  controller-generate <b>name1</b> <b>name2</b> <b>name3</b>


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


