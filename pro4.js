


function english(score, subject){

	if(score>=70){
		if(subject ='eng'){
		document.getElementById('englishgrade').value='A'
		}
	}
	 if(score>=60 && score<=69){
		  if(subject = 'eng'){
			document.getElementById('englishgrade').value='B'
		}
	}
	 if(score >= 50 && score < 60){
		 if(subject = 'eng'){
			document.getElementById('englishgrade').value='C'
		}
	}
	 if(score >= 45 && score< 50){
		if(subject = 'eng'){
			document.getElementById('englishgrade').value='D'
		}
	}
	 if(score >= 40 && score<=45){
		 if(subject = 'eng'){
			document.getElementById('englishgrade').value='E'
		}
	}
	 if(score<40){
		 if(subject = 'eng'){
			document.getElementById('englishgrade').value='F'
		}
	}



} 
// closimg english

function math(score, subject){
	if(score>=70){
		if(subject ='math'){
		document.getElementById('mathgrade').value='A'
		}
	}
 	if(score>=60 && score<=69){
		  if(subject = 'math'){
			document.getElementById('mathgrade').value='B'
		}
	}
	 if(score >= 50 && score < 60){
		 if(subject = 'math'){
			document.getElementById('mathgrade').value='C'
		}
	}
	 if(score >= 45 && score< 50){
		if(subject = 'math'){
			document.getElementById('mathgrade').value='D'
		}
	}
	 if(score >= 40 && score<=45){
		 if(subject = 'eng'){
			document.getElementById('mathgrade').value='E'
		}
	}
	 if(score<40){
		 if(subject = 'eng'){
			document.getElementById('mathgrade').value='F'
		}
	}
		}
		// closing math
	
	function chemistry(score, subject){
	if(score>=70){
		if(subject ='chem'){
		document.getElementById('chemistrygrade').value='A'
		}
	}
 	if(score>=60 && score<=69){
		  if(subject = 'chem'){
			document.getElementById('chemistrygrade').value='B'
		}
	}
	 if(score >= 50 && score < 60){
		 if(subject = 'chem'){
			document.getElementById('chemistrygrade').value='C'
		}
	}
	 if(score >= 45 && score< 50){
		if(subject = 'chem'){
			document.getElementById('chemistrygrade').value='D'
		}
	}
	 if(score >= 40 && score<=45){
		 if(subject = 'chem'){
			document.getElementById('chemistrygrade').value='E'
		}
	}
	 if(score<40){
		 if(subject ='chem'){
			document.getElementById('chemistrygrade').value='F'
		}
	}
		}
		// closing chemistry


	function biology(score, subject){
	if(score>=70){
		if(subject ='bio'){
		document.getElementById('biologygrade').value='A'
		}
	}
 	if(score>=60 && score<=69){
		  if(subject = 'bio'){
			document.getElementById('biologygrade').value='B'
		}
	}
	 if(score >= 50 && score < 60){
		 if(subject = 'bio'){
			document.getElementById('biologygrade').value='C'
		}
	}
	 if(score >= 45 && score< 50){
		if(subject = 'bio'){
			document.getElementById('biologygrade').value='D'
		}
	}
	 if(score >= 40 && score<=45){
		 if(subject = 'bio'){
			document.getElementById('biologygrade').value='E'
		}
	}
	 if(score<40){
		 if(subject ='bio'){
			document.getElementById('biologygrade').value='F'
		}
	}
		}
		// closing biology



	function french(score, subject){
	if(score>=70){
		if(subject ='bio'){
		document.getElementById('frenchgrade').value='A'
		}
	}
 	if(score>=60 && score<=69){
		  if(subject = 'bio'){
			document.getElementById('frenchgrade').value='B'
		}
	}
	 if(score >= 50 && score < 60){
		 if(subject = 'bio'){
			document.getElementById('frenchgrade').value='C'
		}
	}
	 if(score >= 45 && score< 50){
		if(subject = 'bio'){
			document.getElementById('frenchgrade').value='D'
		}
	}
	 if(score >= 40 && score<=45){
		 if(subject = 'bio'){
			document.getElementById('frenchgrade').value='E'
		}
	}
	 if(score<40){
		 if(subject ='bio'){
			document.getElementById('frenchgrade').value='F'
		}
	}
		}
		// closing french



function myscore()
{

var english=document.getElementById('englishscore').value

var math=document.getElementById('mathscore').value

var chemistry=document.getElementById('chemistryscore').value

var biology=document.getElementById('biologyscore').value

var french=document.getElementById('frenchscore').value
 
 totalscore = parseFloat(english) + parseFloat(math) + parseFloat(chemistry) + parseFloat(biology) + parseFloat(french)

document.getElementById("total").innerHTML = totalscore

average=document.getElementById('average').innerHTML=totalscore/5


if(average >50){
	document.getElementById('proud').innerHTML = 'proud of you';
	document.getElementById('image').src='images/emoji2.jpg';
	document.getElementById('page').style.backgroundColor='green'
	document.getElementById('page').style.color='black'

}
else{
	document.getElementById('proud').innerHTML = 'you dissapointed your teacher';
	document.getElementById('image').src='images/emoji1.jpg';
	document.getElementById('page').style.backgroundColor='red'
	document.getElementById('page').style.color='white'

}






}
// final myscore




// totally(english,math,chemistry,biology,french)





// totally(document.getElementById('englishscore').value, document.getElementById('mathscore').value, 
// 	document.getElementById('chemistryscore').value, document.getElementById('biologyscore').value, 
// 	document.getElementById('frenchscore').value,)




 






	// if(score>=60 && score<=69){
	// 	if(subject ='eng'){
	// 	document.getElementById('englishgrade').value='B'
	// 	};
	// 	 if(subject = 'math'){
	// 		document.getElementById('mathgrade').value='B'
	// 	}
	// 	 if(subject = 'chem'){
	// 		document.getElementById('chemistrygrade').value='B'
	// 	};
	// 	 if(subject = 'bio'){
	// 		document.getElementById('biologygrade').value='B'
	// 	};
	// 	 if(subject = 'french'){
	// 		document.getElementById('frenchgrade').value='B'
	// 	};
		
	// 	}
	
// }
		//  final closing



	// 	else if(score >= 50 && score < 60){
	// 			if subject = 'eng'
	// 	{
	// 		document.getElementById('englishgrade').value='C'
	// 	} else if subject = 'math' {
	// 		document.getElementById('mathgrade').value='C'
	// 	}
	// 	 else if subject = 'chem' {
	// 		document.getElementById('chemistrygrade').value='C'
	// 	}
	// 	 else if subject = 'bio' {
	// 		document.getElementById('biologygrade').value='C'
	// 	}
	// 	 else if subject = 'french' {
	// 		document.getElementById('frenchgrade').value='C'
	// 	}
		
	// 	}

	// 		else if(score >= 45 && score< 50){
	// 				if subject = 'eng'
	// 	{
	// 		document.getElementById('englishgrade').value='D'
	// 	} else if subject = 'math' {
	// 		document.getElementById('mathgrade').value='D'
	// 	}
	// 	 else if subject = 'chem' {
	// 		document.getElementById('chemistrygrade').value='D'
	// 	}
	// 	 else if subject = 'bio' {
	// 		document.getElementById('biologygrade').value='D'
	// 	}
	// 	 else if subject = 'french' {
	// 		document.getElementById('frenchgrade').value='D'
	// 	}
	// }
		
	// 			else if(score >= 40 && score<=45){
	// 					if subject = 'eng'
	// 	{
	// 		document.getElementById('englishgrade').value='E'
	// 	} else if subject = 'math' {
	// 		document.getElementById('mathgrade').value='E'
	// 	}
	// 	 else if subject = 'chem' {
	// 		document.getElementById('chemistrygrade').value='E'
	// 	}
	// 	 else if subject = 'bio' {
	// 		document.getElementById('biologygrade').value='E'		}
	// 	 else if subject = 'french' {
	// 		document.getElementById('frenchgrade').value='E'
	// 	}


	// }
		
	// 				else {if subject = 'eng'
	// 	{
	// 		document.getElementById('englishgrade').value='E'
	// 	} else if subject = 'math' {
	// 		document.getElementById('mathgrade').value='E'
	// 	}
	// 	 else if subject = 'chem' {
	// 		document.getElementById('chemistrygrade').value='E'
	// 	}
	// 	 else if subject = 'bio' {
	// 		document.getElementById('biologygrade').value='E'		}
	// 	 else if subject = 'french' {
	// 		document.getElementById('frenchgrade').value='E'
	// 	}
		
		




// function mysheet(score subject){
// 	if (subject= 'eng')
// 		{document.getElementbyid('englishscore').value='A'}
// 	else if(subject='math')
// }







// function mysheet(){
// 	score=document.getElementById('fill').value;
// 	if(score>=70){document.getElementById('grade1').value='A'}
// 	else if(score>=60 && score<=69){alert('B')}
// 		else if(score > 50 && score < 60){alert('C')}
// 			else if(score > 45 && score< 50){alert('D')}
// 				else if(score > 40 && score<=45){alert('E')}
// 					else {alert('F')}
// }


// function myscore(){
// score=document.getElementById('fill').value
// 	if(score>=70){document.getElementById('fill').value='A'}
// 	else if(score>=60 && score<=69){alert('B')}
// 		else if(score > 50 && score < 60){alert('C')}
// 			else if(score > 45 && score< 50){alert('D')}
// 				else if(score > 40 && score<=45){alert('E')}
// 					else {alert('F')}
// 	}

// var score=document.getElementById('first1').value
// function myfinal(input){
// score=document.getElementById('first1').value
// 	if(score>=70){alert(input='A')}
// 		else if(score>=60 && score<=69){alert(input='B')}
// 		else if(score > 50 && score < 60){alert(input='C')}
// 			else if(score > 45 && score< 50){alert(input='D')}
// 				else if(score > 40 && score<=45){alert(input='E')}
// 					else {alert('F')}

// }

// alert(score)

