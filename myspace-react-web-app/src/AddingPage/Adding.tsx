import './AddingPage.css';

export default function Adding() {
    return (
        <div>
            <input type="text" placeholder="Title" />
            <table>
                <tr>
                    <td valign="top">
                        <input type="file" placeholder="Insert Images" />
                    </td>
                    <td valign="top">
                        <input type="text" placeholder="Add Item Name" /> <br/>
                        <input type="number" placeholder="$50" /> <input type="text" placeholder="location" /> <br />
                        {/* description */}
                        <label>Description:</label><br />
                        <textarea cols={50} rows={10}
                            placeholder="Discription of item"
                            title="tooltip">
                        </textarea>
                        {/* tags */}
                        <label htmlFor="wd-select-many-genre"> Tags: </label><br />
                        <select multiple aria-label="Tags">
                            <option selected value="FREE">Free</option>
                            <option value="NEW">New</option>
                            <option selected value="USED">Used</option>
                            <option value="CHEAP">Cheap</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
    );
}