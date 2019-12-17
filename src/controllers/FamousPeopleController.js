'use strict'
var FP = require('../data/famous_people.json');
const fs = require('fs');
const Path = require('path');

var selectProfession = (profession) => { //Select the profession
	let famousPeopleByProfession = [];
	switch (profession) {
		case 'actors':
			return famousPeopleByProfession = FP.filter(f => f.profession == 'actor' || f.profession == 'actress');
			break;
		case 'singers':
			return famousPeopleByProfession = FP.filter(f => f.profession == 'singer');
			break;
		case 'scientists':
			return famousPeopleByProfession = FP.filter(f => f.profession == 'scientific');
			break;
		case 'athletes':
			return famousPeopleByProfession = FP.filter(f => f.profession == 'athlete');
			break;
		case 'businessmen':
			return famousPeopleByProfession = FP.filter(f => f.profession == 'businessman' || f.profession == 'businesswoman');
			break;
		default: 
			return false;
			break;
	}	
};

var responseJson = (res,status, message, array) => { // Server response
	if(status != 200){
		return res.status(status).json({
			status: 'error',
			message: message			
		});	
	}
	return res.status(status).json({
		status: 'success',
		message: message, 
		array
	});
}

const controller = {
	getFamousPeople: (req, res) => {
		let last = req.params.last;
		let famousPeople = FP;
		if(last || last != undefined ){
			famousPeople = famousPeople.filter(f => f._id <= last);
		}

		return  responseJson(res, 200, 'Famous found', famousPeople);
	}, //end getFamousPeople
	getFamousPeopleByProfession: (req, res) => {
		let profession = req.params.profession;
		let famousPeopleByProfession = [];
		
		if(!profession || profession == null){		
			return  responseJson(res, 404, 'Specify the profession');
		}

		famousPeopleByProfession = selectProfession(profession);
		
		if(!famousPeopleByProfession){
			return  responseJson(res, 404, 'There is no one registered with this profession');
		}
		
		return  responseJson(res, 200, 'the profession has been found', famousPeopleByProfession);
	},//end getFamousPeopleByProfession
	getFamousPeopleBySex: (req, res) => {
		let sex = req.params.sex;
		
		if(!sex || sex == null){
			return  responseJson(res, 404, 'Specify the sex');
		}
		
		let famousPeopleBySex = FP.filter(f => f.sex == sex);
		
		if(famousPeopleBySex.length === 0){
			return  responseJson(res, 404, 'This sex not exists');
		}
		
		return  responseJson(res, 200, 'The sex has been found', famousPeopleBySex);
	},//end getFamousPeopleBySex
	getFamousPeopleByName: (req, res) => {
		let name = req.params.name;
		
		if(!name || name == null){
			return  responseJson(res, 404, 'Specify the name');
		}
		
		let famousPeopleByName = FP.filter(f => f.first_name.includes(name) === true || f.last_name.includes(name) === true);
		
		if(famousPeopleByName === undefined || famousPeopleByName.length === 0){
			return  responseJson(res, 404, 'This name not exists');
		}
		return  responseJson(res, 200, 'The name has been found', famousPeopleByName);
	},
	getImage: (req, res) => {
		let image = req.params.image;
		let pathFile = './src/upload/Famous_People/' + image;
		
		fs.exists(pathFile, (exists) => {
            if(!exists){
                return res.status(404).send({
                    status: 'error',
                    message: 'La ruta de imagen no existe'
                });
            }
            return res.sendFile(Path.resolve(pathFile)); //devuelve la imagen
        });
	}

}

module.exports = controller;