"""
Day1:
npm install -g create-react-app
create-react-app eight-queen
npm install --save react-bootstrap
npm install --save bootstrap

Problem encountered:
Q1. react-bootstrap not working.
A1.https://github.com/facebookincubator/create-react-app/issues/301 

Q2. bootstrap has 12 grids a row. Can't get 8.
A2.http://www.uakron.edu/it/cms/responsive-guide/gridding/five-col.dot 

Day2:
objectives:
O1: add hover effect for chessboard cells.
O2: add cell ID for each div. Console.log the id # when cell is clicked.

Q1: create obj: var hdd={name:"xiaoming",iq:0.2,hobbies:[sleep, running]};
Q2: how to pass obj to html element?
A2: var position = {x:1, y:2};
    <Chess position={position}/>
    or: <Chess position={{x:1, y:2}}/>
Q3: how to add event handler?
A3:https://facebook.github.io/react/docs/handling-events.html 

Q4: function is defined above render. constructor should bind this.
But why and how to use constructor.

Day3:
when clicked, toggle background-color of chess.
pay attention to html css inline setting. Also, remember "setState".
"""