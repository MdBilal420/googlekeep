import React from "react"

const TagSelect = ({ tags }) => {



    console.log(tags)
    // const arr = ["1", "2", "3"]

    console.log(tags, typeof (tags))
    return <div>

        {tags}
        {/* <select>
            {
                tags.map((tag) => {
                    return <option>{tag.name}</option>
                })
            }
        </select> */}
        {/* <ul>
            {
                arr.map((tag) => {
                    return <li>{tag}</li>
                })
            }
        </ul> */}
    </div>
}

export default TagSelect;