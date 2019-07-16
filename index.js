'use-strict';

// Helper Library for QoooBiT API.
// For help and assistance, please go to: https://support.qooob.it
const Q = require('q');
const needle = require('needle');
var qs = require('querystring');


const config = {baseURL: 'https://api.qooob.it', version: '0.0.1', };

module.exports = function(apiKey) {
    const modules = {};
    // Healthcheck Module
    modules.healthcheck = function(callback){
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version }};
        needle.get(config.baseURL+'/healthcheck', options, function(error, response) {
            //console.log(response.statusCode);
            console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(true); // Resolve the promise successfullyS
            } else {
                //console.log('got a not 200');
                //deferred.reject(false);
                deferred.resolve(false); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });
        deferred.promise.nodeify(callback);
        return deferred.promise;
    };
    // Get Project List Module
    modules.getProjectList = function(callback){
        //console.log(apiKey);
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version, 'x-api-key': apiKey }};
        needle.get(config.baseURL+'/projects/list', options, function(error, response) {
            //console.log(response.statusCode);
            //console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(response.body); // Resolve the promise successfully
            } else {
                deferred.resolve(response.body); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });
        deferred.promise.nodeify(callback);
        return deferred.promise;
    };
    // Update a QoooBiT static Color for a unit inside a Project
    modules.setStaticColorInProject = function(projectID, QID, newColor, callback){
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version, 'x-api-key': apiKey }};
        needle.post(config.baseURL+'/projects/'+projectID+'/devices/'+QID+'/color', 'color=static-'+newColor, options, function(error, response) {
            //console.log(response.statusCode);
            //console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(response.body); // Resolve the promise successfully
            } else {
                deferred.resolve(response.body); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });

        deferred.promise.nodeify(callback);
        return deferred.promise;
    };
    // Update a QoooBiT static color for a unit not inside a project
    modules.setStaticColor = function(QID, newColor, callback){
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version, 'x-api-key': apiKey }};

        needle.post(config.baseURL+'/devices/'+QID+'/color', 'color=static-'+newColor, options, function(error, response){
            //console.log(response.statusCode);
            //console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(response.body); // Resolve the promise successfully
            } else {
                deferred.resolve(response.body); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });

        deferred.promise.nodeify(callback);
        return deferred.promise;
    };

    // Flash a QoooBiT Color for a unit inside a project
    modules.setFlashingColorInProject = function(projectID, QID, newColor, callback){
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version, 'x-api-key': apiKey }};

        needle.post(config.baseURL+'/projects/'+projectID+'/devices/'+QID+'/color', 'color=flash-'+newColor, options, function(error, response){
            //console.log(response.statusCode);
            //console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(response.body); // Resolve the promise successfully
            } else {
                deferred.resolve(response.body); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });
        
        deferred.promise.nodeify(callback);
        return deferred.promise;
    };

    // Flash a QoooBiT Color for a unit not  inside a project
    modules.setFlashingColor = function(QID, newColor, callback){
        var deferred = Q.defer();
        const options = {headers: { 'x-mbmlabs-agent': 'NodeSDK', 'x-sdk-version': config.version, 'x-api-key': apiKey }};

        needle.post(config.baseURL+'/devices/'+QID+'/color', 'color=flash-'+newColor, options, function(error, response){
            //console.log(response.statusCode);
            //console.log(response.body);
            if(response.statusCode == 200){
                deferred.resolve(response.body); // Resolve the promise successfully
            } else {
                deferred.resolve(response.body); // We are still resolving the promise, even though the API returned a !200
            }
            if(error){
                deferred.reject('Failed to make a connection to QoooBIT');
            }
        });

        deferred.promise.nodeify(callback);
        return deferred.promise;
    };

    return modules;
};