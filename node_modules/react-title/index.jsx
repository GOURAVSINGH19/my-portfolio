export default title => (
    base => class Title extends base {
        constructor(props) {
            super(props)
            let name = title ? title : props.title
            name ? this.title(name) : null
        }
        title(name) {
            document.title = name;
            document.getElementsByTagName('title')[0].innerHTML = name;
        }
    }
)
