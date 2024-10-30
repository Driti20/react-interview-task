<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Flex Business Solutions Tech Test - Inventory Management</h1>

<h2>Project Overview</h2>
<p>This inventory management app is developed to support Flex Business Solutions’ internal operations. Based on a provided design, the app lets users view job sites, create new job sites, and manage item categories. Each job site includes an inventory dashboard, allowing users to search, filter, and update item information efficiently.</p>

<h3>Key Functionalities</h3>
<ol>
    <li><strong>Create Job Sites</strong>: Add new job sites with specified categories.</li>
    <li><strong>Inventory Management</strong>: Navigate to the inventory dashboard by selecting a job site. Manage and update items across categories.</li>
    <li><strong>Search and Filter</strong>: Search and filter items within the inventory for quick access and updates.</li>
</ol>

<h2>Setup Instructions</h2>
<ol>
    <li><strong>Clone the Repository</strong>:
        <pre><code>git clone https://github.com/Driti20/react-interview-task.git
cd flex-test</code></pre>
    </li>
    <li><strong>Install Dependencies</strong>:
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Run the Application</strong>:
        <pre><code>npm start</code></pre>
        <p> or you can check it here: <a href='https://mm-flex-project.netlify.app/'  target="_blank">https://mm-flex-project.netlify.app/</a> </p>
    </li>
    <li><strong>Run Tests</strong>:
        <ul>
            <li>To run unit tests for the components:
                <pre><code>npm test</code></pre>
            </li>
            <li>To generate test coverage reports, use:
                <pre><code>npm test -- --coverage</code></pre>
            </li>
        </ul>
    </li>
</ol>

<h2>Questions</h2>
<ol>
    <li><strong>How might you make this app more secure?</strong>
        <ul>
            <li><strong>Authentication and Authorization</strong>: Implement user authentication to secure access, restricting inventory updates to authorized users.</li>
            <li><strong>Input Validation and Sanitization</strong>: Add validation on all form inputs to prevent SQL Injection, XSS, and other attacks.</li>
            <li><strong>HTTPS and API Security</strong>: Use HTTPS for secure communication and token-based authentication for API endpoints.</li>
        </ul>
    </li>
    <li><strong>How would you make this solution scale to millions of records?</strong>
        <ul>
            <li><strong>Pagination and Lazy Loading</strong>: Implement pagination to load records in chunks, reducing load on both the client and server.</li>
            <li><strong>Database Indexing</strong>: Index database tables on commonly searched fields to optimize query performance.</li>
            <li><strong>Caching</strong>: Use caching for frequently accessed data and implement a CDN to reduce latency.</li>
        </ul>
    </li>
</ol>

<h3>Additional Notes</h3>
<p>Necessary packages are listed in <code>package.json</code>.</p>
<p>Screenshots of the final app can be found in the <code>screenshots</code> folder within the repository.</p>

</body>
</html>
