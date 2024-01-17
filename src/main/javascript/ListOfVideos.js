import React from "react"

class ListOfVideos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    async componentDidMount() {
        let json = await fetch("/api/videos").json()
        this.setState({data: json})

    }

 // The code snippet renders a list of items from the state data, displaying the name of each item as a list item.
    render() {
        return (
            <ul>
                {this.state.data.map(item=>
                <li>
                    {item.name}

                </li>)}
            </ul>
        )
    }

}

export default ListOfVideos