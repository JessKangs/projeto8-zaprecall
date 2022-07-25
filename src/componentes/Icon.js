

export default function Icon ( { status }) {


        return ( 
            status === "wrong" ? 
            <div className="wrong">
                <ion-icon color="red" name="close-circle"></ion-icon>
            </div>
             : status === "right" ? 
             <div className="right">
                <ion-icon name="checkmark-circle"></ion-icon>
             </div> 
             : status === "almost" ? 
             <div className="almost">
                <ion-icon name="help-circle"></ion-icon>
             </div> 
             : <ion-icon name="play-outline"></ion-icon>
        )

}