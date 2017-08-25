
#### How to run the program?
1. installation necessary tools:
    npm install
    axios
    react
    react-bootstrap
    bootstrap
    flask

2. in eight_queen > frontEnd: npm start
3. in eight_queen > executor: python getList.py
4. open localhost:3000, click squares, and hit "submit" button.

####Day1:
```bash
$ npm install -g create-react-app
$ create-react-app eight-queen
$ npm install --save react-bootstrap
$ npm install --save bootstrap
```

Problem encountered:
Q1. react-bootstrap not working.
A1.https://github.com/facebookincubator/create-react-app/issues/301 

Q2. bootstrap has 12 grids a row. Can't get 8.
A2.http://www.uakron.edu/it/cms/responsive-guide/gridding/five-col.dot 

####Day2:
objectives:
O1: add hover effect for chessboard cells.
O2: add cell ID for each div. Console.log the id # when cell is clicked.

Q1: create obj: 
```javascript
    var hdd={name:"xiaoming",iq:0.2,hobbies:[sleep, running]};
```
Q2: how to pass obj to html element?
A2: 
```javascript
    var position = {x:1, y:2};
    <Chess position={position}/>
```
    or: 
```javascript
    <Chess position={{x:1, y:2}}/>
```
Q3: how to add event handler?
A3:https://facebook.github.io/react/docs/handling-events.html 

Q4: function is defined above render. constructor should bind this.
But why and how to use constructor.

####Day3:
when clicked, toggle background-color of chess.
pay attention to html css inline setting. Also, remember "setState".

####Day4:
add queen_list in setState. Limit length to 8. If it is to exceed 8, throw out
an alert. console.log queen_list.

Q1: position ={x, y}. How to check if {x, y} exists in queen_list?
A1: if i use: this.props.queenList.indexOf({x, y}), it doesn't work.
in other words, the following code return False:
```javascript
    var a = {x:1, y:1};
    var b = [{x:1, y:1}, {x:2, y:2}];
    console.log((a in b)||(a == b[0]);
```

i'm using a very primitive way:
```javascript
    var exist = False;
    for(var i=0;i< b.length;i++){
        if ((a.x == b[i].x)&&(a.y == b[i].y){
            exist =  True;
            break;
        }
    }
    return exist;    
```

Q2: how to remove an element in array in js?
A2: to remove element queenList[index]:
        this.props.queenList.splice(index, 1)

####Day5:
add a flask backend server. get Queen_list from front panel. 

Q1: crossOrigin.
https://flask-cors.readthedocs.io/en/latest/ 

Q2: button in bootstrap.
A2: pay attention to terms:
    className instead of class; onClick instead of onclick

Q3: axios doesn't quite work.
A3: No need to jsonify queenlist before axios.post.Otherwise, the data format would be messed up. Cannot make sure if axios.post automatically transfer data into json format. needs to be verified.

####Day6:
pylint has many required formats. pay attention.

Q1: how to alert response from app.js?
A1:     
```javascript
    axios.post(url, data)
        .then((response)=>{
          console.log(response);
          alert(response.data);
        });
```