<?php if (!empty($search_results)): ?>
    <h3>Search Results:</h3>
    <table border="1">
        <tr>
            <th>Accession Number</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Edition</th>
            <th>Publisher</th>
        </tr>
        <?php foreach ($search_results as $row): ?>
            <tr>
                <td><?= htmlspecialchars($row['AccessionNumber']) ?></td>
                <td><?= htmlspecialchars($row['Title']) ?></td>
                <td><?= htmlspecialchars($row['Author']) ?></td>
                <td><?= htmlspecialchars($row['Edition']) ?></td>
                <td><?= htmlspecialchars($row['Publishers']) ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
<?php endif; ?>