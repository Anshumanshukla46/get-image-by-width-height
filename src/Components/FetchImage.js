import React from "react";

export default function FetchImage(props) {

    const [detail, setDetail] = React.useState({
        width: 200,
        height: 200,
        random: "https://placekitten.com/200/200"
    });


    function handleChange(event) {
        const { name, value } = event.target

        setDetail(prev => ({
            ...prev,
            [name]: value
        }))

    }

    var newurl

    function handleClick() {

        setDetail(prev => ({
            ...prev,
            random: newurl
        }));

    }


    React.useEffect(() => {

        async function getImage() {

            const newImage = await fetch(`https://placekitten.com/${detail.width}/${detail.height}`)
            const strImage = await newImage.url;

            setDetail(prv => ({
                ...prv,
                random: strImage
            }))

            // newurl = strImage
        }
        getImage();


    }, [detail.random])


    return (
        <div>

            <h2 className="heading">
                Enter width and height (best between 200 to 1200)
            </h2>


            {/* <form> */}

            <input
                type="number"
                className="form--input"
                placeholder="Enter width"
                name="width"
                value={detail.width}
                onChange={handleChange}
            />

            <br />
            <br />

            <input
                type="number"
                className="form--input"
                placeholder="Enter height"
                name="height"
                value={detail.height}
                onChange={handleChange}
            />

            <br />
            <br />

            <button
                className="button"
                onClick={handleClick}
            >Get Image</button>

            {/* </form> */}


            <br />


            <img src={detail.random} />

        </div>

    )
}