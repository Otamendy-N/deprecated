# Errors Codes

An error code is something like this  ``2301``. A normal code error is displayed by this way:<br>
``2301``
```js
 [ERROR-2301]: You can not execute this command.
```

There you have the names of the zones:
<br>``Error Numb``
```js
 Error message
```
```js
 [Error code]: error short description
```
*______________________________________________________*

An error code/Numb have diferents parts:

``2`` ``3`` ``0`` ``1``<br>
or<br>
``2`` ``3`` ``0`` ``1234``
<br>

The first number is the error type code:<br><br>

If is 1 is an error of the IA code<br>
If is 2 is an error of the command sistem<br>
<br>
##Now if the first number is 2:<br>

The second number, if it's:
<br>
0: a code run command error<br>
1: an user command error<br>
2: an admin command error<br>
3: a developer command error ( I hope that you will not see this kind of error)<br>
<br>
the third number, if it's:<br>
<br>
0: is an acsses error (You or the bot don't/doesn't have the permision to use this command)<br>
1: a promise have an error<br>
2: a function have an error<br>
3: A lefthanding error<br>
<br>
(Note: after the third number we are going to say that is only one number)<br>
<br>
the last number is an id of the zone of the code with the error<br>
(We are going to put that in a kind of list)<br>
 0  -->app.js <br>
1-3 -->commands/commando.js<br>
3-? -->?<br>
?-? -->?<br>



 
