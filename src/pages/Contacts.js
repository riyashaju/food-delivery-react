import React from 'react'
import './Contacts.css';
import { FaAddressCard, FaLandmark, FaPhone, FaStar} from 'react-icons/fa';
const colors = {
	yellow: "#fffb00",
	white: "#ffffff"
}

function Contacts() {

const stars = Array(5).fill(0);
const[currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined);
const handleClick = value => {
	setCurrentValue(value)
};
const handleMouseOver = value =>{
	setHoverValue(value)
}
 const handleMouseLeave = () =>{
	setHoverValue(undefined)
 }
 const suggestions = () =>{
	alert("Thanks for your support.")
 }
 const booking = () =>{
	alert("Your table has been booked.Have a good day.")
 }

  return (
	<>
	
	<body >
		<div style={{backgroundColor:'grey'} }>
			<div class="max" style={{marginTop:'30px'} }></div><br></br><br></br>
		<div class="op0 container " >
			<div class= "row">
				<div class="col-6 ">
					<img src="https://4.bp.blogspot.com/-lnM6Szj8rI8/WWSREgSjjFI/AAAAAAAAAHI/OLneHeewSDcC3xfdW4n1yyHwNkXa9ja7ACLcBGAs/s1600/book-a-table-in-restaurant-online.jpg" width={600} class="img-thumbnail mt-3" style={{borderRadius:'17px'} }></img>
				</div>
				
					<form  style={{marginTop:'30px'} }>
						<table class="col-6 ">
							<tr >
							<th><input class="op00 " type="text" placeholder='name' ></input></th>
							<th><input class="op00" type="text" placeholder='email'></input></th>
							</tr>
							<tr >
								<th><input class="op00" type="text" placeholder='number' ></input></th>
								<th><input class="op00" type="text" placeholder='food name'></input></th>
							</tr>
							</table>
							<textarea class="ml-4" name="comment" cols="51" rows="4" placeholder='special requirements...' style={{borderRadius:'6px'} }></textarea>
							<br></br>
								<button  class="btn bg-dark mt-3 ml-4" style={{color:'white',marginBottom:"30px"}} onClick={booking}>Book Now</button>
					</form>
					
			</div>
		</div>
		<br></br>
		<section>
			<div class="container">
			<div class=" row " style={{marginTop:'150px'} }>
				<div class="col-12 col-md-6">
				<h1 style={{color:'white',fontFamily:'times new roman',fontSize:'90px', textShadow:'7px 5px 6px black'}}>Any suggestions<span>?</span></h1>
			     </div>
			   <div class="col-12 col-md-6">
				<textarea class="ml-2 mt-5 " name="comment" cols="51" rows="6" placeholder='suggestions here...' style={{borderRadius:'6px'} }></textarea>
					 <div class="ml-2 oop00" >
					{stars.map((_, index) => {
						return (
							<FaStar key={index} style={{ cursor:"pointer"}}
							color={(hoverValue || currentValue) > index ? colors.yellow : colors.white}
							onClick={() => handleClick(index + 1)}/>
						)
					})}
					<button class="btn lol00" onClick={suggestions}>submit</button>
					</div>
					
				
					</div>
					</div>
					</div>
					</section>
<br></br><br></br>
					<section>
				<div class="container" >
	<div class="row cvbn"  >
    <div class="card col-9 col-md-6 col-lg-3  mb-3 mr-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4   text-center">
		<FaLandmark/>
        <p class="card-text mb-3 mt-3">fhjklk</p>
		<p>dfghgjgj</p>
      </div>
    </div>
    <div class="card col-9 col-md-6 col-lg-3 mr-3 mb-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4  text-center" >
		<FaAddressCard/>
        <p class="card-text mb-3 mt-3">rujhg3df@gmail.com</p>
		<p>fgghjbjb@gmail.com</p>
      </div>
    </div>
    <div class="card col-9 col-md-6 col-lg-3  mr-3 mb-3" style={{padding:'0',borderRadius:'17px'} }>
      <div class="card-body dfg4  text-center">
		<FaPhone/>
        <p class="card-text mt-3 mb-3">456789005</p>
		<p>243567889</p>
      </div>
    </div>
	</div></div>	
					
</section>
<br></br><br></br>
	<section>
		</section>				
		</div>
			
</body>
	</>
  )
}

export default Contacts
