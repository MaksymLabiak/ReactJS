// ReactDOM.render(<div>
//     <h1>Hello World</h1>
//     <h2>Hello World2</h2>
// </div>, document.getElementById('root'))


// текст без JSX
// ReactDOM.render(React.createElement('input', {
//     placeholder: 'Enter something',
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('entered')
// }), document.getElementById('root'))

// текст с JSX
// якщо нам потрібно використати якусь функцію, то нам потрібно прописувати фігурні дужки, також змінні

const inputClick = () => console.log('clicked');

const mouseOver = () => console.log('mouse over');

const enterSmth = "Enter something";

const elements = (<div className="name">
    <h1>{enterSmth}</h1>
    <input placeholder={enterSmth} onClick={inputClick} onMouseEnter={mouseOver} />
    <p>{1 + 5}</p>
    <p>{enterSmth === "Enter something" ? "Yes" : "No"}</p>
</div>)

const app = document.getElementById('root')

ReactDOM.render(elements, app)