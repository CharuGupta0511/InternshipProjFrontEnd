import React from "react";

const OneList = ({ product }) => {
    return (
        <tr>
            <td>{product.dateLastModif}</td>
            <td>{product.type}</td>
            <td>{product.senderCode}</td>
            <td>{product.receiverCode}</td>
            <td>{product.partner}</td>
            <td>{product.fileName}</td>
            <td>{product.docNumber}</td>
            <td>{product.numberOfDocuments}</td>
            <td>{product.docInfo}</td>
            

            {/* <td>{product.issueDate}</td>
            <td>{product.productName}</td>
            <td>{product.prize}</td>
            <td>{product.siteName}</td>
            <td>{product.partnersName}</td>
            <td>{product.interchangeNum}</td> */}
        </tr>

        
    );
};

export default OneList