import React from 'react';
import jQuery from 'jquery';
import csrftoken from '../../../../../static/js/csrf.js'
/**
 * Company Service,
 * Manage company objects through api.
 * @param props
 * @return {*}t
 * @constructor
 */

/**
 *  Manages the product manager api.
 */
const COMPANY_MANAGER_API_URL = '/company_manager/';

class CompanyService extends React.Component {
    /**
     *
     * @param filter_param_dict
     * @return {Promise<Response>}
     */
    static getCompanies(filter_param_dict) {
        return fetch(`${COMPANY_MANAGER_API_URL}?${jQuery.param(filter_param_dict)}`, {
            method: 'GET',
        }).then(d =>{
            return d.json();
        })
    }

    /**
     * Registers company provided the relevant fields
     * @param company
     * @return {Promise<Response>}
     */
    static registerCompany(company) {
        return fetch(`${COMPANY_MANAGER_API_URL}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(company)
        }).then(d => d.json())
    }

    /**
     * Updates fields of a given company
     * @param updated_field_dict
     * @param company_pk
     * @return {Promise<Response>}
     */
    static updateCompany(updated_field_dict, company_pk) {
        return fetch(`${COMPANY_MANAGER_API_URL}${company_pk}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(company)
        }).then(d => d.json())
    }


    /**
     * Register a list of users to a company
     * @param user_dict_list
     * @param company_pk
     * @return {Promise<Response>}
     */
    static addUsersToCompany(user_dict_list, company_pk) {
        return fetch(`${COMPANY_MANAGER_API_URL}${company_pk}/register_user`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(company)
        }).then(d => d.json())
    }

}

export default CompanyService