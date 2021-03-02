import React from "react"

const TagSelect = ({ tags }) => {



    console.log(tags)
    // const arr = ["1", "2", "3"]

    console.log(tags, typeof (tags))
    return <div>
        <select>
            {
                tags.map((tag) => {
                    return <option>{tag}</option>
                })
            }
        </select>
    </div>
}

export default TagSelect;