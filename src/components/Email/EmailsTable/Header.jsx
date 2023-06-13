function Header() {
  return (
    <tr>
      {/* For Now we don't need checkbox
      <th scope="col" class="py-3 px-4 pr-0">
        <div class="flex items-center h-5">
          <input
            id="hs-table-pagination-checkbox-all"
            type="checkbox"
            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          <label for="hs-table-pagination-checkbox-all" class="sr-only">
            Checkbox
          </label>
        </div>
      </th> 
      */}
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
      >
        Subject
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
      >
        Status
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
      >
        Receipients
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
      >
        Sent At
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
      >
        Action
      </th>
    </tr>
  );
}

export default Header;
