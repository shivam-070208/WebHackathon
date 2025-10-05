export default function Type() {
    return (
        <div style={{display:"flex", gap : "30px", justifyContent:"center", alignItems:"center"}}>
            <div>
            Type 
            </div>
            <div style={{
                border: "1px solid black",
                borderRadius: "30px",
                padding: "14px 20px 14px 50px",
                display: "flex",
            }}>
                <div style={{borderRadius:"50%", backgroundColor:"#873a2d", height:"20px", width:"20px", transform:"translateX(-25px)"}}></div>
                <div style={{transform:"translateY(-2px)"}}>Refurbishment</div>
            </div>
            <div style={{
                border: "1px solid black",
                borderRadius: "30px",
                padding: "14px 28px 14px 50px",
                display: "flex",
            }}>
                <div style={{borderRadius:"50%", backgroundColor:"#873a2d", height:"20px", width:"20px", transform:"translateX(-25px)"}}></div>
                <div style={{transform:"translateY(-2px)"}}>New Build</div>
            </div>
            <div style={{
                border: "1px solid black",
                borderRadius: "30px",
                padding: "12px 25px 12px 25px",
                backgroundColor:"#78463c",
                color:'white'
            }}>
                <div>All</div>
            </div>
        </div>
    );
}
