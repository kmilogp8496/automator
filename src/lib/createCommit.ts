import { exec as _exec, execSync } from 'node:child_process'
import { promisify } from 'node:util'

const exec = promisify(_exec)

export async function createCommit() {
  const { stdout } = await exec('git status -s')

  if (stdout)
    console.error('You should commit your changes before running this script')
    // return

  execSync('git add .')
  execSync('git commit -m "Monthly npm update" --no-verify')
  execSync('git push -u origin HEAD')
}
