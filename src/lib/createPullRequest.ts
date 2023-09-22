import { Buffer } from 'node:buffer'

export async function createPullRequest({
  bitbucketBaseUrl = 'https://bitbucket.check24.de/rest/api/1.0/',
  bitbucketProjectSpace = 'SEG',
  repositoryName = 'seco-backoffice',
  username = 'camilo.gonzalez',
  password = 'vivacuba2004/*',
  title = 'Monthly npm update',
  sourceRefName = 'refs/heads/feature/setup',
  targetRefName = 'refs/heads/main',
}) {
  const response = await fetch(`${bitbucketBaseUrl}projects/${bitbucketProjectSpace}/repos/${repositoryName}/pull-requests`, {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      fromRef: {
        id: sourceRefName,
      },
      toRef: {
        id: targetRefName,
      },
    }),
    method: 'POST',
  })

  console.log(response.status)
  console.log(await response.json())
}
