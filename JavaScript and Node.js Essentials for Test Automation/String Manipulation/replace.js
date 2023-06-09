let fileName = 'Invoice_123.pdf'
let query_template = 'select * from {{table_name}}'
let dt = '1996-07-10'

// 1. Get only filename

let onlyFileName = fileName.slice(0,11)
console.log(onlyFileName);

let onlyFileName2 = fileName.replace('Invoice_123.pdf','Invoice_123')
console.log(onlyFileName2);

// 2. Rename the file

let txtfile = fileName.replace('pdf','txt')
console.log(txtfile);

// 3. Replace the table_name with account

let changedQuery_template= query_template.replace('{{table_name}}','account')
console.log(changedQuery_template);

// 4. Convert the DT with two ways

let modifiedDT = dt.replaceAll('-','')
console.log(modifiedDT);

let modifiedDT2 = dt.replace(/-/g,'')
console.log(modifiedDT2);