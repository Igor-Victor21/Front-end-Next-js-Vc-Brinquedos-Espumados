import NavBar from '@/components/nav'

export default function Favorites(){
    return(
        <>
            <NavBar color={false} invert={false} showLoja={false} showFav={false} showCart={true} showSobre={false} showCtt={false}/>
        </>
    )
}