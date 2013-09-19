package net.sf.robocode.daimatanke;

import net.sf.robocode.host.IRobotClassLoader;
import net.sf.robocode.repository.IRobotItem;
import net.sf.robocode.host.JavaHost;

public class DaiMaTanKeHost extends JavaHost {
    public IRobotClassLoader createLoader(IRobotItem robotItem) {
        return new DaiMaTanKeClassLoader(robotItem.getClassPathURL(),
                                         robotItem.getFullClassName());
    }
}
