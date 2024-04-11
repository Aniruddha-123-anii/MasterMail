export const API_URLS = {
    saveSendMails : {
        endpoint : 'save',
        method : 'POST'
    },
    saveDraftMails : {
        endpoint : 'save-draft',
        method : 'POST'
    },
    getEmailFromType : {
        endpoint : 'emails',
        method : 'GET'
    },
    moveEmailToTrash : {
        endpoint : 'trash',
        method : 'POST'
    },
    deleteEmailfromTrash : {
        endpoint : 'remove-trash',
        method : 'POST'
    },
    toggleStarredEmail : {
        endpoint : 'starred',
        method : 'POST'
    },
}