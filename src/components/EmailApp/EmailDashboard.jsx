import EmailsTable from "./EmailsTable/Table";

function EmailDashboard() {
  return (
    <div className="bg-gray-50 h-full">
      <div className="max-w-[800px] mx-auto p-4 pt-12">
        <EmailsTable />
      </div>
    </div>
  );
}

export default EmailDashboard;
