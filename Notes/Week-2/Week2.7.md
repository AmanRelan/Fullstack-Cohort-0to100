# Week 2.7

### Things you will cover in this week

- Version Control System
- Git
- Github

#### Episode Theory

##### Version Control System

- Helps keep track of the files and the changes across the projects
- Helps collaboration with friends
- Allows revert of code/project to previous state, compare changes, see who modified something, what is the issue, who made the issue, when and other details related to the change.
- 2 types

1. Centralized -> Helps you backup, track and synchornize files. Fails as when they go down, no one can collaborate then.
2. Distributed -> Group of people have complete project along with history available in their machine. You have access all the time, you can make changes on the local machine and do not need connection to the vcs apart from when you want to publish or fetch some changes from the main. Example- GIT

##### Git

- Why Git?

1. Free
2. Open Source
3. Scalable
4. Super Fast
5. Cheap Branching and merging.

- Used for Version Control System
- Installed locally on the computer
- Track Changes made to a file

##### Github

- Web based hosting service for git repositories
- You can use git without github, but you cannot use github without git
- Used for hosting git repositories
- Cloud based
- Provides a web interface to view files.

###### Git Terminologies

- Local Repository -> In short development setup/ things on local machine
- Working area and staging area or Index -> An intermediate area where commits can be formatted and reviewed before completing the commit.
- push -> send a change to another repository
- pull -> grab a change from a repository

###### Basic Workflow of GIT

Working Directory ---git add---> staging area ---git commit--->repository

###### Git Intricacies and Git Commands

- Blobs -> Binary Large Objects
- Trees -> object that represents a directory. Holds blob.
- Commits -> commit holds the current state of the repository, node of a Linked List(has a pointer to the parent commit object).
- Clone -> Bring a repository to local machine
- Add -> Track your files and changes in git
- Commit -> Save your files in Git
- Push -> Upload your commits to a git repo
- Pull -> Download changes from a git repo to local repo
- Merge -> Merges one branch into the other

> Sometimes, you can get into a merge conflict. If you change the same part of the same file in two different commits/Branches you're merging, Git won't be able to merge them cleanly and will show a Merge Conflict.
>
> When you have a merge conflict, git doesn't automatically merge and pauses the process while asking us to resolve the commit.
>
> once you resolve the conflicting files, you can simply do `git commit`.

###### Git commands to resolve conflicts

- `git log --merge` -> produce the list of commits that are causing the conflict
- `git diff` -> Identify the differences between the states repositories or files.
- `git checkout` -> Undo the changes/switch branches
- `git reset --mixed` -> Used to undo changes to the working directory and staging area.
- `git merge --abort` -> Helps in exiting the merge process and returning back to the state before the merging began.
- `git reset` -> Used at the time of the merge conflict to reset the conflicted files to their original state.
