import 'bootstrap/dist/css/bootstrap.min.css';


export const Timeline = ({currentIndex}) => {
    const lineStyle = {
        width: "100%",
        height: "4px",
        backgroundColor: "#890000",
        position: "absolute",
        top: "50%",
        transform: " translateY(-50%)",
    }
    const dotHolder = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    }
    const getDotStyle = ({index}) => {
        return {
            width: 32,
            height: 32,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 2,
            border: `${index <= currentIndex ? 8 : 2}px solid #890000`
        }
    }
    return (
        <>
            <div className="position-static" style={{paddingTop: 100, paddingBottom: 100}}>
                <div className="position-relative">
                    <div style={lineStyle}></div>
                    <div className=" w-100 d-flex flex-row justify-content-between z-3" style={dotHolder}>
                        {Array.from({length: 5}, (_, index) => (
                            <div key={index} style={getDotStyle({index})}></div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}
