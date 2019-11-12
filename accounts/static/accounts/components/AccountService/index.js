import React from 'react';
import jQuery from 'jquery'

import csrftoken from '../../../../../static/js/csrf.js'

/**
 * This is the product manager
 * It can register a list of products or modify entries of a list of products
 * Registration is generic given a form
 * @param props
 * @return {*}
 * @constructor
 */
const ACCOUNT_MANAGER_URL = '/accounts';
/**
 *  Manages the product manager api.
 */
export default class AccountService extends React.Component {
    /**
     * gets possible language choices for user to select from
     * @return {Promise<any | never>}
     */
    static getLanguageChoices() {
        return fetch(`${ACCOUNT_MANAGER_URL}/languages`, {
            method: 'GET',
        }).then(d => d.json())
    }

    /**
     * Gets the currently selected language by the user
     * @return {Promise<any | never>}
     */
    static getLanguage() {
        return fetch(`${ACCOUNT_MANAGER_URL}/languages/current`, {
            method: 'GET',
        }).then(d => d.json())
    }

    /**
     * Sets the user language to the requested one.
     * @param selected_language: {language:<str>,code:<str>}
     * @return {Promise<any | never>}
     */
    static setLanguage(selected_language) {
        return fetch(`${ACCOUNT_MANAGER_URL}/languages/current`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(selected_language)
        }).then(d => d.json())
    }

    /**
     * Sets the user language to the requested one.
     * @param selected_company: {language:<str>,code:<str>}
     * @return {Promise<any | never>}
     */
    static setCompany(selected_company) {
        return fetch(`${ACCOUNT_MANAGER_URL}/company/current`, {
            method: 'POST',
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(selected_company)
        }).then(d => d.json())
    }

}

