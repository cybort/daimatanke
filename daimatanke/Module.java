package net.sf.robocode.daimatanke;

import net.sf.robocode.core.Container;

public class Module {
    static {
        Container.cache.addComponent("robocode.host.daimatanke", DaiMaTanKeHost.class);
    }
}
