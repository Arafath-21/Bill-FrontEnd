function ExpenseTable() {
    return (
        <div className=" overflow-x-auto shadow-md ">
        <table className="w-full text-left text-sm text-gray-800 ">
          <thead className="bg-gray-100 text-xs uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item name
              </th>
              <th scope="col" className="px-6 py-3">
                item code
              </th>
              <th scope="col" className="px-6 py-3">
                Buying Date
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                buying price
              </th>
              <th scope="col" className="px-6 py-3">
                total amount
              </th>
              <th scope="col" className="px-6 py-3">
                contact
              </th>
              <th scope="col" className="px-6 py-3">
                manufacturer
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {purchase.map((purchase, index) => (
              <PurchaseRow purchase={purchase} key={index} />
            ))} */}
          </tbody>
        </table>
      </div>
    )
}

export default ExpenseTable
