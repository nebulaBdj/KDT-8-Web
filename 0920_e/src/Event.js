function Event() {

    const handleC = () => {
        alert('클릭했습니다.')
    }

    const handleC2 = (e, str) => {
        console.log(e);
        alert(str);
    }

    return (
        <>
            <button onClick = {handleC}>클릭</button>
            <button onClick = {(e) => handleC2(e, "클릭2 클릭")}>클릭2</button>

        </>
    )
}

export default Event;