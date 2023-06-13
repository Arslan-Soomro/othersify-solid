import SeenBadge from "./badges/SeenBadge";
import SentBadge from "./badges/SentBadge";

function Row() {
  return (
    <tr>
      {/* For now we don't need checkbox
        <td class="py-3 pl-4">
          <div class="flex items-center h-5">
            <input
              id="hs-table-pagination-checkbox-1"
              type="checkbox"
              class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <label
              for="hs-table-pagination-checkbox-1"
              class="sr-only"
            >
              Checkbox
            </label>
          </div>
        </td> 
        */}
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        John Brown
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        <SeenBadge />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        New York No. 1 Lake Park
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        2020-20-30
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a class="text-blue-500 hover:text-blue-700" href="#">
          Details
        </a>
      </td>
    </tr>
  );
}

export default Row;
