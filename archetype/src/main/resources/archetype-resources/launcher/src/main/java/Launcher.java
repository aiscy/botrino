#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static java.util.stream.Collectors.joining;

public class Launcher {

    public static void main(String[] args) throws IOException {
        var launcherCmdPath = Path.of(args.length == 0 ? "." : args[0]);
        if (Files.isDirectory(launcherCmdPath)) {
            launcherCmdPath = launcherCmdPath.resolve("launcher.cmd");
        }
        var processBuilder = new ProcessBuilder();
        processBuilder.directory(launcherCmdPath.getParent().toFile());
        var commandLine = Files.lines(launcherCmdPath)
                .collect(joining("${symbol_escape}n"))
                .replace("${symbol_escape}${symbol_escape}${symbol_escape}n", " ");
        processBuilder.command(commandLine.split(" +"));
        var process = processBuilder.start();
        System.out.println(commandLine);
        System.out.println("Bot started (PID: " + process.pid() + ")");
    }
}
