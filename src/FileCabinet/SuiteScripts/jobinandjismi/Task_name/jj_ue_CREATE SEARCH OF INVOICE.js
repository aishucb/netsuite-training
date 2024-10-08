/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/search'],
    /**
 * @param{search} search
 */
    (search) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            function createSearchForSalesRecord()
            {
                try{
                let mySalesOrderSearch = search.create({
                    
                    type: search.Type.INVOICE,
                    title: 'INVOICE WITH OPEN STATUS JJ',
                    id: 'customsearch_jj_invoice_open_demo',
                    columns: [{
                        name: 'tranid'
                    }, {
                        name: 'trandate'
                    }, {
                        name: 'entity'
                    }, {
                        name: 'total'
                    },{
                        name: 'email'
                    }],
                    filters: [{
                        name: 'status',
                        operator: 'is',
                        values: ['CustInvc:A']
                    },{
                        name: 'mainline',
                        operator: 'is',
                        values: ['T']
                    }
                ]
                    
                });

                mySalesOrderSearch.save();}
                catch(err)
                {
                    log.debug(err);
                }
            }
            createSearchForSalesRecord();
        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
