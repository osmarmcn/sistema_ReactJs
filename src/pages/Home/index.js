import Slideshow, { Slideshow2, Avatar } from "./Slideshow";

function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            {/* <Slideshow 
                image="https://img.freepik.com/fotos-gratis/paisagem-natural-em-um-jardim-botanico_35355-5948.jpg"
            />
            <Slideshow 
                image="https://th.bing.com/th/id/OIP.ikV1GusGbsElrSH-S7o5DwHaEo?pid=ImgDet&rs=1"
            /> */}
            <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.ikV1GusGbsElrSH-S7o5DwHaEo?pid=ImgDet&rs=1" />
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/fotos-gratis/paisagem-natural-em-um-jardim-botanico_35355-5948.jpg" />
            
        </div>
    );
}

export default Home;