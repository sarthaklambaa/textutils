import React from 'react'

export default function About(props) {


//     const [myStyle, setMyStyle] = useState(
//         {
//         color: 'white',
//         backgroundColor: 'black'
//         }
//     )

//     const [btnText, setBtnText] = useState("Enable Dark Mode")

//     const toggleStyle = () =>{
//         if (myStyle.color === 'white'){
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//         })
//         setBtnText("Enable Dark Mode")
//     }
//         else{
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black'
//         })
//         setBtnText("Enable Light Mode")
//     }
// }

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item"  style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body"  >
                        Our state-of-the-art text analysis tools provide you with invaluable insights, allowing you to understand your writing on a whole new level. By utilizing our advanced algorithms and linguistic analysis, you can uncover hidden patterns, detect redundancies, and fine-tune your content to perfection. From assessing readability and word count to ensuring grammatical accuracy and exploring vibrant vocabulary, our text analysis capabilities are unparalleled. Gain a comprehensive understanding of your text and elevate your writing to new heights with our powerful suite of analytical tools.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                        We firmly believe that text analysis tools should be accessible to all. That's why we're proud to offer our services completely free of charge. We understand the importance of empowering writers, students, and professionals with the ability to enhance their text without any financial barriers. Our commitment to making text analysis tools accessible means that you can utilize our comprehensive suite of features without any subscription fees or hidden costs. Whether you need to analyze readability, check grammar and spelling, find synonyms, or translate text, our tools are available to you at no cost. We believe that everyone should have the opportunity to improve their writing and create impactful content, regardless of their financial circumstances.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                        This website is designed to be fully compatible with all major web browsers, ensuring a seamless text analysis experience across different platforms. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, you can access our tools without any compatibility issues. Our responsive web design ensures that you can enjoy the same user-friendly interface and robust functionality, regardless of the browser you choose. Whether you're analyzing text on your computer, laptop, tablet, or smartphone, TextUtils.com adapts effortlessly to your device, allowing you to access our powerful text analysis tools on the go. Say goodbye to compatibility concerns and enjoy a consistent and reliable text analysis experience across all your browsing devices.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} type="button" className="btn btn-dark my-4">{btnText}</button> */}
        </div>
    )
}
