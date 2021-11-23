import subprocess


def yarn(self, action):
    if self == "logs":
        subprocess.run(["sudo", "docker", "logs", "frontend-dev", "--follow"])
    else:
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "exec", "frontend-dev", "yarn", self, action])
